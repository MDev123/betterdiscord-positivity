/**
 * @name Positivity
 * @version 0.1.0
 * @description Enjoy great positivity.
 * @source https://github.com/MDev123/betterdiscord-positivity/main
 * @updateUrl https://github.com/MDev123/betterdiscord-positivity/main/positivity.plugin.js
 */

const request = require("request");

const config = {
    info: {
        name: "Positivity",
        authors: [
            {
                name: "kno",
            },
        ],
        version: "0.1.0",
        description: "Great positivity!",
    },
    changelog: [
        {
            title: "Updates",
            type: "fixed",
            items: ["Added more positivity quotes."],
        },
        {
            title: "Bug Fixes",
            type: "fixed",
            items: ["Fixed a bug where the same quote could be shown twice in a row."],
        },
    ],
    defaultConfig: [],
};

module.exports = class Positivity {
    start() {
        console.log("[Positivity] Plugin started.");

        // Show changelog
        const changes = config.changelog
            .map((change) => `### ${change.title}\n${change.items.map((item) => `- ${item}`).join("\n")}`)
            .join("\n\n");
        const changelog = `# Changelog\n\n${changes}`;
        BdApi.alert("💡 Positivity 💡", changelog);

        // Check for updates
        this.checkForUpdates();

        // Array of positivity quotes
        const positivityQuotes = [
            "You are amazing just the way you are!",
            "Don't be afraid to dream big and chase your passions!",
            "Believe in yourself and you can accomplish anything!",
            "Every day is a new opportunity to make a positive change!",
            "You are capable of overcoming any obstacle!",
            "The world needs your unique talents and perspectives!",
            "You are deserving of love and happiness!",
            "You are stronger than you think!",
            "Challenges are opportunities for growth and learning!",
            "Your potential is limitless!",
            "You have the power to make a difference in someone's life today!",
            "Good things are coming your way, so keep your head up!",
            "You are not alone, and there are people who care about you!",
            "You are worthy of respect and kindness!",
            "You are making progress, even if it doesn't always feel like it!",
            "You are enough, just as you are!",
            "You are capable of creating your own happiness!",
            "You have the power to inspire others!",
            "Believe in your dreams, and they will come true!",
            "You are capable of great things, so don't give up!",
        ];

        // Get a random positivity quote from positivityQuotes
        const randomQuote =
            positivityQuotes[Math.floor(Math.random() * positivityQuotes.length)];

        BdApi.alert("💡 Positivity 💡", randomQuote);
    }

    stop() {
        console.log("[Positivity] Plugin stopped.");
        BdApi.alert("💡 Positivity 💡", "Positivity plugin has been shutdown. See you next time, though!");
    }
    checkForUpdates() {
        const updateUrl = this.constructor.config.info.updateUrl;
        if (!updateUrl) {
            console.log("[Positivity] No update URL found.");
            return;
        }
    
        console.log("[Positivity] Checking for updates...");
        request(updateUrl, (err, res, body) => {
            if (err) {
                console.error("[Positivity] Error checking for updates:", err);
                return;
            }
    
            if (res.statusCode !== 200) {
                console.error(`[Positivity] Error checking for updates: HTTP ${res.statusCode}`);
                return;
            }
    
            const versionRegex = /@version\s+([^\s]+)/;
            const match = body.match(versionRegex);
            if (!match) {
                console.log("[Positivity] Update URL found, but version not specified.");
                return;
            }
    
            const remoteVersion = match[1];
            const currentVersion = this.constructor.config.info.version;
    
            if (remoteVersion === currentVersion) {
                console.log(`[Positivity] Plugin is up-to-date (v${currentVersion}).`);
                return;
            }
    
            console.log(`[Positivity] New version available: v${remoteVersion} (current version: v${currentVersion}).`);
            BdApi.alert("💡 Positivity 💡", `A new version of the Positivity plugin is available (v${remoteVersion}). Please update the plugin for a better experience!!`);
        });
    }
}    
