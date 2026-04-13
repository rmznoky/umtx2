// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/download/v0.19/Payload.zip",
    //     version: "0.19",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
    {
        displayTitle: "ETAHEN 2.6B",
        description: "FOR 1.XX TO 10.01",
        fileName: "etaHEN-2.6B.bin",
        author: "Date UPDATE 13-04-2026",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/blob/360e7c0d2dddf4f4645599d51d652e707c0b717b/etaHEN-2.0b.bin",
        version: "2.6B",
        toPort: 9021
    },
    {
        displayTitle: "ps5-kstuff-lite",
        description: "FPKG enabler",
        fileName: "kstuff.elf",
        author: "sleirsgoevy, john-tornblom, EchoStretch, buzzer-re, BestPig, LightningMods, zecoxao, idlesauce",
        projectSource: "https://github.com/EchoStretch/kstuff-lite",
        binarySource: "https://github.com/EchoStretch/kstuff-lite/releases/download/v1.03/",
        version: "1.03",
        supportedFirmwares: ["3.", "4.", "5.", "6.", "7.", "8."],
        toPort: 9021
    },
	
        {
        displayTitle: "VoidShell",
        description: "VoidShell V3.0 - Beta",
        fileName: "voidshell.elf",
        author: "voidwhisper",
        projectSource: "",
        binarySource: "",
        version: "V3.0",
        toPort: 9021
    },
    {
        displayTitle: "Backpork",
        description: "By BestPig V1.0",
        fileName: "ps5-backpork.elf",
        author: "Seported 4.XX To 7.XX",
        projectSource: "https://github.com/BestPig/BackPork",
        binarySource: "https://github.com/BestPig/BackPork",
        version: "1.0",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
	{
        displayTitle: "ShadowMountPlus",
        description: "ShadowMountPlus 1.6test8-fix1 12.00 fixed",
        fileName: "shadowmountplus.elf",
        author: "drakmor",
        projectSource: "https://github.com/drakmor/ShadowMountPlus",
        binarySource: "https://github.com/drakmor/ShadowMountPlus",
        version: "1.6test8",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },

    
    {
        displayTitle: "App_title By Master",
        description: "Thank You Master",
        fileName: "app_title.elf",
        author: "Creat By Master",
        projectSource: "https://github.com/MasterPS0/PS5-appls-tital/releases",
        binarySource: "https://github.com/MasterPS0/PS5-appls-tital/releases",
        version: "V1.0",
        toPort: 9021
    },

	    {
        displayTitle: "ftpsrv",
        description: "FTP server. Runs on port 2121.",
        fileName: "ftpsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/pacbrew-repo/actions/runs/14012252230",
        version: "0.19",
        toPort: 9021
    },
	
    {
        displayTitle: "websrv",
        description: "Custom homebrew loader. Runs on port 8080.",
        fileName: "websrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/websrv",
        binarySource: "https://github.com/ps5-payload-dev/websrv/actions/runs/14318408868",
        version: "0.30.1",
        toPort: 9021
    },
    
      {
        displayTitle: "Garlic SaveMgr for PS5",
        description: "A Local Save Manager for your PS5",
        fileName: "garlic-savemgr.elf",
        author: "By earthonion",
        projectSource: "https://github.com/earthonion/garlic-savemgr",
        binarySource: "https://github.com/earthonion/garlic-savemgr",
        version: "V1.7",
        toPort: 9021
    },

     {
        displayTitle: "libhijacker game-patch",
        description: "Patches supported games to run at higher framerates, and adds debug menus to certain titles.",
        fileName: "libhijacker-game-patch.v1.160.elf",
        author: "illusion0001, astrelsky",
        projectSource: "https://github.com/illusion0001/libhijacker",
        binarySource: "https://github.com/illusion0001/libhijacker-game-patch/releases/tag/1.160-75ab26a3",
        version: "1.160",
        supportedFirmwares: ["3.", "4."]
    },

       {
        displayTitle: "Remover V1.01 Cache Webkit",
        description: "By Vladimir.",
        fileName: "remover.elf",
        author: "By Vladimir",
        projectSource: "https://github.com/vladimir-cucu/ps5-webkit-cache-remover",
        binarySource: "https://github.com/vladimir-cucu/ps5-webkit-cache-remover",
        version: "V1.01",
        toPort: 9021
    },

    {
        // https://github.com/Storm21CH/PS5_Browser_appCache_remove
        displayTitle: "REMOVE CACHE AND CLEAN BROWSER",
        description: "CLEAN CACHE 1.XX TO 5.XX",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }

];















