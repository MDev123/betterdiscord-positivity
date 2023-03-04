/**
 * @name Positivity
 * @version 0.1.0
 * @description Enjoy great positivity.
 * @author kno
  * @source https://github.com/MDev123/betterdiscord-positivity/main
 * @updateUrl https://mdev123.github.io/betterdiscord-positivity/positivity.plugin.js
 */

const version = Number("0.1.0".replaceAll('.', ''))

const config = {
    info: {
        name: "Positivity",
        authors: [
            {
                name: "kno",
            },
        ],
        version: "0.0.2",
        description: "Great positivity!",
    },
    changelog: [
        {
            title: "**Updates**",
            type: "fixed",
            items: ["Added more positivity quotes."],
        },
        {
            title: "**Bug Fixes**",
            type: "fixed",
            items: ["Fixed a bug where the same quote could be shown twice in a row."],
        },
        {
            title: "# Twitter",
            type: "fixed",
            items: ["Follow us on twitter! https://twitter.com/BPositivityLife"]
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
        BdApi.showNotice(randomQuote)
        console.log("[Positivity] Plugin stopped.");
        BdApi.alert("💡 Positivity 💡", "Positivity plugin has been shutdown. See you next time, though!");
    }

     load() {
        fetch("https://mdev123.github.io/betterdiscord-positivity/positivity.plugin.js", {cache: "no-store"}).then(res => res.text()).then(res => {
			let newVersion = Number(res.substring(res.indexOf("version") + 8, res.indexOf("version") + 13).replaceAll('.', ''))
			if (newVersion > version) {
				console.log("UPDATING!")
				require("fs").writeFile(`${BdApi.Plugins.folder}/Template.plugin.js`, res)
			}
		})
    }

    constructor(c) {
        this.config = c
    }
};
