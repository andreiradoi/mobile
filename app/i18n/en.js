// prettier-ignore
module.exports = {
    // Include module and sensor names
    ...require('./modules.en'),
    // AssembleStationView.vue
    notIncluded: "not included",
    welcome: "Welcome!",
    mobileAppIntro: "Our mobile app makes it easy to set up and deploy your FieldKit station.",
    getStarted: "Get Started",
    skipInstructions: "Skip instructions",
    assembleStation: "Assemble Station",
    haveEverything: "Do You Have Everything?",
    assembleStep1: "Check that you have all of the necessary parts to assemble your FieldKit.",
    assembleStep2: "Place your core board and radio board together.",
    assembleStep3: "Take the combined core board and radio board and attach it to the back plane.",
    assembleStep4: "Attach your individual modules to the back plane, then secure them with screws.",
    assembleStep5: "Take all of your attached components and place them inside the station enclosure. Secure the system down with screws.",
    assembleStep6: 'Attach the battery at the top of the radio board where it says "BATTERY."',
    assembleStep7: 'Insert the button cord to the radio board into the port labeled "BTN."',
    assembleStep8: "Plug in your micro USB cable to charge the station battery.",
    assembleStep9: 'Make sure that the switch is in the "On" position. Leave plugged in to charge for an hour.',
    assembleStep10: "Station Assembled",
    enclosure: "Enclosure",
    radioBoard: "Radio board",
    coreBoard: "Core board",
    backPlane: "Back plane",
    moduleParts: "Module(s)",
    battery: "battery",
    screws: "Screws",
    microCable: "Micro USB cable",
    screwdriver: "Screwdriver",
    // ConnectStationCheck.vue
    connecting: "Connecting",
    // ConnectStationError.vue
    havingProblems: "Having Problems Connecting?",
    problemStep1: "1. Check the WiFi button again",
    problemStep2: "2. Turn on station’s WiFi access point on the directly from the station settings menu",
    problemStep3: "3. If you are still having get help at our support and troubleshoot center",
    tryAgain: "Try Again",
    skipStep: "Skip this step",
    getHelp: "Get help",
    noModulesConnected: "No Modules Connected",
    noModulesInstruction: "Complete your FieldKit Station by adding sensor modules.",
    addModules: "Add Modules",
    continueWithoutModules: "Continue without modules",
    // ConnectStationForm.vue
    savedNetworks: "Saved WiFi Networks",
    noSavedNetworks: "No saved networks",
    show: "Show",
    hide: "Hide",
    changeStationName: "Name your FieldKit Station",
    changeStationNameInstruction: "You can always change this later.",
    saveNewName: "Save New Name",
    stationNameHint: "Enter a name for your station",
    reconnectToStation: "Reconnect to your FieldKit Station",
    yourWifi: "Your WiFi Network",
    wifiStep1: "Enter the name and password of the WiFi network you would like to connect your FieldKit station to.",
    wifiStep2: "Unfortunately, only 2.4GHz WiFi is currently supported and both fields are case sensitive.",
    wifiNameTitle: "Select WiFi Network",
    wifiNameBig: "Add a list of preferred WiFi Networks.",
    next: "Next",
    networkNameHint: "Enter WiFi network name",
    networkPasswordHint: "Enter network password",
    // ConnectStationList.vue
    selectYourStation: "Select Your Station",
    selectStationInstruction: "We found FieldKit Stations. Choose the station you want to connect to.",
    noStationTryAgain: "Don't see your station? Try again.",
    // ConnectStationModules.vue
    connect: "Connect",
    setup: "Set Up",
    fetchingStationInfo: "Fetching station information",
    done: "Done",
    setupLater: "Set up later",
    endCalibrationStep: "Your FieldKit station setup is complete.",
    // ConnectStationView.vue
    fieldkitWifi: "FieldKit Station WiFi",
    introConnectStep1: "Your station has an access point with its own WiFi network that's used to connect directly to your mobile device (there's no internet connectivity).",
    introConnectStep2: "Confirm that your station WiFi is on by pressing the external WiFi button.",
    connectYourStation: "Connect your FieldKit Station",
    connectStep1: "To connect to your station, go to your mobile phone WiFi settings and select the station's WiFi name as displayed on the station screen.",
    chooseWifiSettings: "WiFi Connection Settings",
    chooseWifiInstruction: "Choose how to connect and sync data. You can update this later in Settings.",
    stationWifi: "Station WiFi",
    stationWifiInfo: "Access point",
    stationWifiDescription: "Syncs station data to your phone only. When you have internet connection later, you can upload it to the FieldKit web portal.",
    recommended: "Recommended",
    yourWifi: "WiFi Network",
    yourWifiInfo: "Internet",
    yourWifiDescription: "Add a list of preferred wifi networks to sync station data straight to the FieldKit web portal. If unable to join these networks, it will use its Station Wifi.",
    reconnectInstruction: "To reconnect to your station, go to your mobile phone WiFi settings and select the station's new WiFi name as displayed on the station screen.",
    deploymentLocation: "Deployment Location",
    deploymentLocationInstructions: "What kind of place will you deploy your station? Will the station have internet access?",
    remoteLocationTitle: "Remote",
    remoteLocationDescription: "No internet",
    connectedLocationTitle: "Connected",
    connectedLocationDescription: "Internet access",
    connectStation: "Connect Station",
    dataSyncStationTitle:"Data Sync Details",
    dataSyncStationInfo:"How do you want to sync your phone's data for all your stations? You can update this later in Settings.",
    completeSettings: "Connection Settings Complete",
    // Recalibrate.vue
    goToStations: "Go to Stations",
    noModulesAttachedTitle: "No Modules Attached",
    noModulesAttachedBody: "Your stations needs modules in order to complete setup, deploy and capture data.",
    // StationSettingsEndDeploy.vue
    notCurrentlyRecording: "is not currently recording.",
    areYouSureStopRecording: "Are you sure you want to stop recording?",
    // StationSettingsFirmware.vue
    firmware: "Firmware",
    stationFirmwareVersion: "Station firmware version",
    firmwareNumber: "Firmware number",
    appFirmwareVersion: "App has firmware version",
    upToDate: "You're up to date!",
    additionalInfo: "Additional information",
    firmwareBuild: "Firmware build",
    deviceId: "Device ID",
    // StationSettingsGeneral.vue
    general: "General",
    stationName: "Station Name",
    // StationSettingsLoRa.vue
    longRangeNetwork: "Long Range Network",
    // StationSettingsModule.vue
    moduleTitle: "Module",
    calibrateSensor: "Calibrate Sensor",
    calibrationRecommendation: "Calibrate your sensor any time. It is recommended to calibrate every 6 months to a year.",
    noCalibrationNeededSensor: "No calibration needed for this sensor.",
    // StationSettingsModuleList.vue
    modulesTitle: "Modules",
    // StationSettingsName.vue
    saveName: "Save Name",
    // StationSettingsNetworks.vue
    networks: "Networks",
    wifi: "WiFi",
    lora: "LoRa",
    // StationSettingsView.vue
    // StationSettingsWiFi.vue
    network: "Network",
    uploadSchedule: "Upload Schedule",
    // StationSettingsWiFiNetwork.vue
    wifiNetwork: "WiFi Network",
    maxTwoNetworksWarning: "A maximum of two WiFi networks can be saved. Please remove one if you would like to add another.",
    uploadConfigUpdated: "Upload configuration has been updated.",
    unableToUpdate: "Unable to update",
    pleaseLogin: "Please Log In to perform this action.",
    noteNeedInternet: "Note: you need to be connected to the internet in order to perform this action.",
    configuredToUploadDirectly: "Your station is currently configured to upload data directly over WiFi.",
    uploadViaApp: "Upload via App",
    noteUploadDirectlyOption: "If desired, you can set your station to upload data directly over WiFi.",
    uploadOverWifi: "Upload over WiFi",
    areYouSureRemoveNetwork: "Are you sure you want to remove this network?",
    // StationSettingsWiFiSchedule.vue
    // UpgradeFirmwareModal.vue
    upgradeInProcess: "Upgrading station firmware. Thank you for your patience.",
    noLocalFirmwareOffline: "No local firmware and you're offline so none can be downloaded.",
    downloadingFirmware: "Downloading firmware.",
    upgradeDone: "Upgrade done, your station is now restarting.",
    downloaded: "Downloaded.",
    // AppSettingsView.vue
    fieldkitSettings: "FieldKit Settings",
    // CalibrationView.vue
    stationDisconnectedTapHere: "Station disconnected.",
    expectedValue: "Expected value",
    calibrateLater: "Calibrate later",
    chooseCalibrationType: "Choose calibration type",
    choosePhInstruction: "Would you like to perform quick calibration or three-point calibration?",
    quickCalibration: "Quick calibration",
    threePointCalibration: "Three-point calibration",
    quickPhCalibration: "Quick pH Calibration",
    haveYourQuickSolution: "Make sure you have your quick calibration pH solution.",
    placeProbeInSolutionWithTemp: "Place probe inside cup with solution. Make sure water temperature is also inside solution.",
    startTimer: "Start Timer",
    calibrate: "Calibrate",
    waterDissolvedOxygen: "Water Dissolved Oxygen",
    dissolvedOxygenCalibration: "Dissolved Oxygen Calibration",
    placeInAndStabilizeWithTemp: "Place probe inside cup with solution and let the readings stabilize. Make sure water temperature is also inside solution.",
    // ConfigureCaptureInterval.vue
    dataCaptureSchedule: "Data Capture Schedule",
    dataCaptureNotice: "Frequent data capture drains the battery at a quicker rate",
    scheduled: "Scheduled",
    basic: "Basic",
    captureTime: "Capture Time",
    start: "Start",
    startBeforeEnd: "Start must be before end",
    end: "End",
    endAfterStart: "End must be after start",
    every: "Every",
    intervalRequired: "Interval must not be blank.",
    intervalTooSmall: "Interval must be at least one minute.",
    intervalNotNumber: "Interval must be a number.",
    addTime: "Add Time",
    second: "second",
    seconds: "seconds",
    minute: "minute",
    minutes: "minutes",
    hour: "hour",
    hours: "hours",
    day: "day",
    days: "days",
    week: "week",
    weeks: "weeks",
    month: "month",
    months: "months",
    year: "year",
    years: "years",
    saveStartTime: "Save Start Time",
    saveEndTime: "Save End Time",
    // DataSyncView.vue
    dataSync: "Data",
    totalDownAndUploaded: "total readings down & uploaded",
    totalDownloaded: "total readings downloaded",
    totalUploaded: "total readings uploaded",
    lastDownUpload: "Last down/upload",
    lastDownload: "Last download",
    lastUpload: "Last upload",
    downloading: "Downloading",
    notConnectedToStation: "Not connected to station",
    checkingDownload: "Checking for data to download...",
    readings: "Readings",
    waitingToUpload: "Waiting to upload",
    toUpload: "to upload",
    failedCheckConnection: "Unable to upload. Are you connected to the internet?",
    uploadSuccessful: "Upload successful",
    uploaded: "Uploaded",
    uploading: "Uploading",
    loginPrompt: "You're not logged in. Would you like to Log in so that you can upload your data?",
    yes: "Yes",
    notNow: "Not Now",
    readyToUpload: "Ready to upload",
    clickToLogin: "You need to Log In to upload. Tap here to go to the Accounts screen.",
    // DeployMapView.vue
    stationDisconnected: "Station disconnected.",
    nameYourLocation: "Name your location",
    locationRequired: "Location is a required field.",
    required: "This field is required.",
    locationOver255: "Location must be less than 256 letters.",
    locationNotPrintable: "Location has invalid letters, acceptable letters are A-Z, 0-9 and \"~!@#$%^&*()-.'`",
    continue: "Continue",
    deployment: "Deployment",
    // DeployNotesView.vue
    fieldNote: "Field Note",
    fieldNotes: "Field Notes",
    photoDescription: "Photo Description",
    describePhoto: "Describe what is in the photo",
    complete: "Complete",
    provideDetails: "Help your community better understand their environment. Field notes can improve communication, troubleshooting and data insights.",
    photosRequired: "Photos (1 required)",
    photosInstruction: "A picture speaks a thousand words.",
    additionalNotes: "Additional Notes",
    addDetails: "Anything else? Capture more notes at any time.",
    addNote: "Add Note",
    save: "Save",
    studyObjective: "Study Objective",
    studyObjectiveInstruction: "What are your goals?",
    siteLocation: "Purpose of Site Location",
    siteLocationInstruction: "Why did you pick this spot?",
    siteCriteria: "Site Criteria",
    siteCriteriaInstruction: "How does it meet your needs?",
    siteDescription: "Site Description",
    siteDescriptionInstruction: "What can you see around you?",
    additionalNoteInstruction: "Tap to add additional notes",
    confirmDeleteNote: "Are you sure you want to delete this note?",
    cancel: "Cancel",
    addPhoto: "Add a photo",
    takePicture: "Take picture",
    selectFromGallery: "Select from gallery",
    // DeployReviewView.vue
    stationCoordinates: "Station Coordinates",
    latitude: "Latitude",
    longitude: "Longitude",
    noNameGiven: "No name given",
    record: "Record",
    mustBeConnectedToRecord: "Station not Connected",
    deploymentReview: "Deployment Review",
    processing: "Processing...",
    // FieldNoteForm.vue
    title: "Title",
    tapToAddTitle: "Tap to add a title",
    note: "Note",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    audioNote: "audio note",
    confirmDeleteRecording: "Are you sure you want to delete this recording?",
    // DeveloperMenuView.vue
    viewStations: "View Stations",
    authenticated: "You have successfully authenticated.",
    currentEnvironment: "The current environment is",
    resetCalibration: "Reset Calibration",
    resetOnboarding: "Reset Onboarding",
    uploadDiagnostics: "Upload Diagnostics",
    deleteDB: "Delete DB",
    deleteFiles: "Delete Files",
    crash: "Crash",
    manualCrash: "Manual Crash",
    devOptions: "Development Options",
    noStationsFound: "No stations found",
    resetDoneGoToOnboarding: "Reset complete! Would you like to go to Onboarding?",
    no: "No",
    dbDeleted: "Database Deleted",
    errorRemovingFiles: "Error removing files!",
    filesRemoved: "Files removed!",
    includeThisPhrase: "Success! Please include this phrase in your bug report:",
    // LoginView.vue
    name: "Name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm password",
    nameRequired: "Name is a required field.",
    nameOver255: "Name must be less than 256 letters.",
    nameNoSpaces: "Name must not contain spaces.",
    emailRequired: "Email is a required field.",
    emailNotValid: "Must be a valid email address.",
    passwordRequired: "Password is a required field.",
    passwordTooShort: "Password must be at least 10 characters.",
    forgotLink: "Reset password",
    noMatch: "Your passwords do not match.",
    logIn: "Log In",
    signUp: "Sign Up",
    continueOffline: "Continue Offline",
    needAccount: "Create an Account",
    backToLogin: "Back to Log In",
    provideBoth: "Please provide both an email address and password.",
    loginFailed: "Unfortunately we were unable to log you in. Please check your credentials and try again.",
    accountCreated: "Your account was successfully created.",
    accountCreateFailed: "Unfortunately we were unable to create your account.",
    forgotTitle: "Reset password",
    forgotInstruction: "Enter the email address you used to register for FieldKit to reset your password.",
    ok: "OK",
    passwordResetSucceeded: "Your password was successfully reset. Please check your email for instructions on choosing a new password.",
    passwordResetFailed: "Unfortunately, an error occurred resetting your password.",
    // ModuleDetailView.vue
    locateYourModule: "Locate %s here on your FieldKit station.",
    select: "Select...",
    // ModuleListView.vue
    viewGraph: "View Graph",
    lastReading: "Last reading",
    // NotificationFooter.vue
    notifications: "Notifications",
    notificationRemindLater: "Remind Later",
    notificationDontRemind: "Don't Remind",
    notificationArchive: "Archive",
    addFieldNotes: "Add Field Notes",
    portalProblemHeading: "Problem with Portal connection",
    encounteredAPortalError: "We encountered an error when connecting to the Portal.",
    unableToUpdateHeading: "Unable to update Portal",
    doNotHavePortalPermission: "We do not have permission to update the Portal for this station. It may belong to another user.",
    unableToAccessHeading: "Unable to access Portal",
    notAuthorizedToUpdatePortal: "We are currently not authorized to update the Portal. Are you logged in?",
    stationDeployedHeading: "Deployed!",
    stationDeployedText: "While waiting to collect some data recordings, fill in some more deployment field notes.",
    // NotificationView.vue
    dismiss: "Dismiss",
    // ScreenFooter.vue
    stations: "Stations",
    data: "Data",
    settings: "Settings",
    // ScreenHeader.vue
    // StationDetailView.vue
    stationDeployed: "Station Deployed",
    readyToDeploy: "Ready to deploy",
    deployed: "Deployed",
    readyToDeployBodyDialog: "Your station is setup and almost ready to start recording data. First, review the steps needed before depolyment.",
    viewChecklist: "View Checklist",
    skipChecklist: "Skip and Explore",
    // StationListView.vue
    lookingForStations: "Looking for stations ...",
    connectAStation: "Connect a Station",
    addStation: "Add a Station",
    addStationInstruction: "You have no stations. Add a station to start collecting data.",
    confirmViewDevMenu: "Do you want to view development options?",
    // StationPickerModal.vue
    // StationSettingsView.vue
    nameOver40: "Name has a 40-character maximum.",
    nameNotPrintable: "Name has invalid letters, acceptable letters are A-Z, 0-9 and \"~!@#$%^&*()-.'`",
    endDeployment: "End Deployment",
    forgetStation: "Forget Station",
    forgetStationTitle: "Are you sure?",
    forgetStationBody: "This will remove all data for this station. Make sure you've uploaded all data to the portal before proceeding.",
    forgetStationOK: "I'm sure",
    forgetStationCancel: "Cancel",
    mustBeConnectedToStop: "To undeploy and stop recording data, you must be connected to your station.",
    stopRecording: "Stop Recording",
    wifiNetworks: "WiFi Networks",
    addNetwork: "Add a network to station",
    networkName: "Network name",
    add: "Add",
    loraNetwork: "LoRa (Long Range) Network",
    deviceEUI: "Device EUI",
    editAppEUI: "Edit App EUI and Key",
    appEUI: "App EUI",
    invalidAppEUI: "Invalid App EUI",
    appKey: "App Key",
    invalidAppKey: "Invalid App Key",
    submit: "Submit",
    logOut: "Log Out",
    tooltipText0: "With a station-to-phone connection, you can view real-time readings and sync data to your phone.",
    tooltipText1: "Monitor battery life and memory for optimum station performance. Readings displayed here are from when you last connected.",
    tooltipText2: "When the timer is counting, your station is deployed and recording data.",
    tooltipText3: "To start recording data, head to your deployment location and hit \"Deploy.\" You'll add helpful notes and pictures to document the process.",
    tooltipText4: "When you're connected, you can view real-time readings for each sensor module.",
    tooltipText5: "Explore the app to view your stations, sync data, and update settings.",
    tooltipNext: "Next",
    tooltipHideAll: "Hide all Tips",
    // StationStatusBox.vue
    unknown: "Unknown",
    since: "Since",
    recordingData: "Recording Data",
    notRecording: "Not Recording",
    connected: "Connected",
    notConnected: "Not Connected",
    memoryUsed: "Memory Used",
    memoryAvailable: "Available Memory",
    of: "of",
    deploy: "Deploy",
    daysHrsMin: "days hrs min",
    hrsMinSec: "hrs min sec",
	downloadFirmware: "Download Firmware",
	upgradeFirmware: "Upgrade Firmware",
    batteryLife: "Battery Life",
	stationSettings: {
    title: "Station Settings",
		wifiSchedule: {
			enable: "Enable Upload over WiFi"
		}
	},
    appSettings: {
        title: "Settings",
		developer: {
			developer: "Developer",
			notice: "The options below have irreversible consequences. Please only use them when directed to."
		},
        data: {
            data: "Data",
            autoSyncStationTitle: "Auto Sync Station",
            autoSyncStationDescription: "Automatically download data from stations",
            autoSyncPortalTitle: "Auto Sync Portal",
            autoSyncPortalDescription: "Automatically upload data to portal",
            mobileDataUsageTitle: "Mobile Data Usage",
            mobileDataUsageDescription: "Only sync data to portal over WiFi (not cellular)",
        },
        notifications: {
            notifications: "Notifications",
            pushNotificationsTitle: "Push Notifications",
            pushNotificationsDescription: "Placeholder text lorem ipsum"
        },
        units: {
            units: "Units",
            unitSystem: "Unit System",
            imperial: "Imperial",
            metric: "Metric",
            customMetricSettings: "Custom Metric Settings",
            temperature: "Temperature",
            unitName: "Unit Name",
            pressure: "Pressure",
            velocity: "Velocity"
        },
        permissions: {
            permissions: "Permissions",
            locationTitle: "Location",
            filesTitle: "Files",
            cameraTitle: "Camera",
            microphoneTitle: "Microphone",
        },
        appearance: {
			appearance: "Appearance",
            fontSize: "Font Size",
            language: "Language",
            darkMode: "Dark Mode",
            english: "English",
            spanish: "Spanish",
            chinese: "Mandarin Chinese",
            tiny: "Tiny",
            huge: "Huge"
        },
        account: {
            account: "Account",
            accounts: "Accounts",
            addAccount: "Add Account",
            logoutAll: "Log Out All Accounts",
            removeAll: "Remove All Accounts",
            email: 'Email',
            password: 'Password',
            resetPassword: 'Reset Password',
            login: 'Log in',
            createAccount: 'Create an account'
        },
        help: {
            help: "Help",
			productGuide: "Product Guide",
            appVersion: "App Version",
            crashReports: "Crash Reports",
            tutorialGuide: "Tutorial Guide",
            version: "Version",
            gitHash: "Git Hash",
            updatesTitle: "Updates",
            updatesDescription: "No available updates",
            downloadUpdatesTitle: "Download Updates",
            downloadUpdatesDescription: "Download FieldKit app updates automatically when on WiFi internet "
        },
        legal: {
            legal: "Legal",
            termsOfService: "Terms of Service",
            privacyPolicy: "Privacy Policy",
            dataPolicy: "Data Policy",
            licenses: "Licenses"
        },
        lorem: "Lorem ipsum"
    },
	calibration: {
		failure: {
			again: "Calibrate Again",
			later: "Calibrate Later",
		},
		water: {
			ph: {
				title: "Set Up",
				subtitle: "pH",
				check: {
					heading: "pH Calibration",
					instructions: "",
					uncalibrated: "This sensor doesn't appear to have been calibrated yet.",
					calibrated: "This sensor is already calibrated. You can clear the calibration below to return the module's state to factory defaults.",
					clear: "Clear Calibration",
					done: "Next",
				},
				strategy0: {
					heading: "pH Calibration",
					help: "pH Calibration,"
				},
				step0: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the pH probe in a cup with the first standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step1: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the pH probe in a cup with the next standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step2: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the pH probe in a cup with the next standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				}
			},
			ec: {
				title: "Set Up",
				subtitle: "Conductivity",
				check: {
					heading: "Conductivity Calibration",
					instructions: "",
					uncalibrated: "This sensor doesn't appear to have been calibrated yet.",
					calibrated: "This sensor is already calibrated. You can clear the calibration below to return the module's state to factory defaults.",
					clear: "Clear Calibration",
					done: "Next",
				},
				strategy0: {
					heading: "Conductivity Calibration",
					help: "Conductivity Calibration,"
				},
				step0: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the conductivity probe in a cup with the first standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step1: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the conductivity probe in a cup with the next standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step2: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the conductivity probe in a cup with the next standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				}
			},
			dox: {
				title: "Set Up",
				subtitle: "Dissolved Oxygen",
				check: {
					heading: "Dissolved Oxygen Calibration",
					instructions: "",
					uncalibrated: "This sensor doesn't appear to have been calibrated yet.",
					calibrated: "This sensor is already calibrated. You can clear the calibration below to return the module's state to factory defaults.",
					clear: "Clear Calibration",
					done: "Next",
				},
				strategy0: {
					heading: "Dissolved Oxygen Calibration",
					help: "Dissolved Oxygen Calibration,"
				},
				step0: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Place the dissolved oxygen probe in a cup of water with your standard dissolved oxygen meter probe.",
						done: "Start Timer",
					},
					standard: "Enter the value below based on your standard dissolved oxygen meter, in mg/L:",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step1: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Place the aquarium pump air stone into the cup with your probes, and turn the aquarium pump to low.",
						done: "Start Timer",
					},
					standard: "Enter the value below based on your standard dissolved oxygen meter, in mg/L:",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step2: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Keep the aquarium pump air stone in the cup, and turn the aquarium pump to high.",
						done: "Start Timer",
					},
					standard: "Enter the value below based on your standard dissolved oxygen meter, in mg/L:",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				}
			},
			temp: {
				title: "Set Up",
				subtitle: "Water Temperature",
				check: {
					heading: "Water Temperature Calibration",
					instructions: "",
					uncalibrated: "This sensor doesn't appear to have been calibrated yet.",
					calibrated: "This sensor is already calibrated. You can clear the calibration below to return the module's state to factory defaults.",
					clear: "Clear Calibration",
					done: "Next",
				},
				strategy0: {
					heading: "Water Temperature Calibration",
					help: "Water Temperature Calibration,"
				},
				step0: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Place the temperature probe and standard thermometer in a cup with ice water.",
						done: "Start Timer",
					},
					standard: "Enter the value below based on your standard thermometer:",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step1: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Place the temperature probe and standard thermometer in a cup with room temperature water.",
						done: "Start Timer",
					},
					standard: "Enter the value below based on your standard thermometer:",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step2: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Place the temperature probe and standard thermometer in a cup with boiling water.",
						done: "Start Timer",
					},
					standard: "Enter the value below based on your standard thermometer:",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				}
			},
			orp: {
				title: "Set Up",
				subtitle: "ORP",
				check: {
					heading: "ORP Calibration",
					instructions: "",
					uncalibrated: "This sensor doesn't appear to have been calibrated yet.",
					calibrated: "This sensor is already calibrated. You can clear the calibration below to return the module's state to factory defaults.",
					clear: "Clear Calibration",
					done: "Next",
				},
				strategy0: {
					heading: "ORP Calibration",
					help: "ORP Calibration,"
				},
				step0: {
					prepare0: {
						heading: "",
						instructions: "",
						done: "",
					},
					prepare1: {
						heading: "",
						instructions: "Place the ORP probe in a cup with the first standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step1: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the ORP probe in a cup with the next standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				},
				step2: {
					prepare0: {
						heading: "",
						instructions: "In between calibration steps you will need to rinse your probes with water. Tap water is fine.",
						done: "Next",
					},
					prepare1: {
						heading: "",
						instructions: "Place the ORP probe in a cup with the next standard.",
						done: "Start Timer",
					},
					standard: "As you wait for the sensor value to stablize, enter the standard value.",
					calibrate: {
						heading: "",
						done: "Calibrate",
					},
				}
			},
		},
		uncalibrated: "Uncalibrated",
		calibrated: "Calibrated",
		cleared: "Cleared",
	},
    calibrationFailed: "Calibration Failed",
    calibrationErrorOccured: "An error has ocurred during calibration. Please double check the standards you have gathered and read the instructions carefully. If the problem persists, please contact technical support.",
    uncalibrated: "Uncalibrated",
    noCalibrationNeeded: "No calibration needed",
    startCalibrationStep1: "Let's set up your station before you deploy!",
    startCalibrationStep2: "To complete setup, calibrate each sensor module for accurate data readings.",
    tapStationToRecalibrate: "Tap the station you want to recalibrate:",
    calibrationRequiredHeading: "Calibration Required",
    calibrationRequiredText: "calibration Required Text",
    calibrationSensorValue: "Sensor Value",
    calibrationStandardValue: "Standard Value",
    calibrationDoneHeading: "Tap the Calibrate button to record the sensor value and the standard value.",
    calibrationDoneHint: "Recording these values together allows us to later calibrate the sensor.",
	onboarding: {
		assembled: {
			message: "Success!"
		},
		network: {
			wifi: {
				caseSensitive: 'Note: The WiFi network name and password are case sensitive.',
				band: `Only 2.4GHz WiFi networks are currently supported.`
			}
		}
	},
	titles: {
		loading: "Loading"
	}
};
