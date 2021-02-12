import axios from "axios";
import flowSchema from "../data/flow-schema";
import * as convertKeys from "convert-keys";
import { FlowFile } from "./model";

let saved: FlowFile = { data: { flows: [], screens: [] } };

export async function getFlows(): Promise<FlowFile> {
    return Promise.resolve(saved);
}

export async function download(baseUrl: string): Promise<FlowFile> {
    console.log("flows: downloading");

    const query = {
        query: `
        {
            flows {
                id
                name
                show_progress
            }
            screens {
                id
                name
                locale
                forward
                skip
				guide_title
				guide_url
                header { title subtitle }
                simple {
                    body
                    images { url }
                }
            }
        }
        `,
    };

    const response = await axios({
        method: "POST",
        url: baseUrl + "/graphql",
        data: query,
        transformResponse: (res) => {
            const fixed = res.replace(String.fromCharCode(8232), "\\n");
            return JSON.parse(fixed);
        },
    });

    const data = convertKeys.toCamel(response.data);

    console.log("flows: verify");

    await flowSchema.validate(data);

    const flowFile = data as FlowFile;

    saved = flowFile;

    return saved;
}
