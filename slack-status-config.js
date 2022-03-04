require('dotenv').config();

module.exports = [
    {
        name: 'Tighten',
        // Filter by Zoom user email
        email: 'jacob@tighten.co',
        /**
         * Add this as an Enviroment variable on Vercel and in the local `.env` file
         */
        token: process.env.SLACK_TOKEN,
        /**
         * Zoom Verification Token
         *
         * A verification token will be generated in the Feature page after you
         * enable and save the event subscription.
         *
         * @see https://marketplace.zoom.us/docs/api-reference/webhook-reference#headers
         *
         * Add this as an Enviroment variable on Vercel and in the local `.env` file
         */
        zoomVerificationToken: process.env.ZOOM_VERIFICATION_TOKEN,
        /**
         * Slack DnD Status
         *
         * Turns on Do Not Disturb mode for the current user. Number of minutes,
         * from now, to snooze until.
         *
         * @see https://api.slack.com/methods/dnd.setSnooze
         */
        dndNumMinutes: 60,
        meetingStatus: {
            text: "I'm in a meeting",
            emoji: ':warning:', // emoji code
        },
        noMeetingStatus: {
            text: '',
            emoji: '',
        },
    },
];
