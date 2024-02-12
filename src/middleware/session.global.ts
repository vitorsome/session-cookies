import { updateSession } from 'h3';
export default defineNuxtRouteMiddleware(async () => {
    if (process.server) {
        const event = useRequestEvent();
        const session = await updateSession(event, {
            name: 'session',
            password: 'z8A22NpgFlfLBqrVCYCEpYaN5FxWDKVw',
            cookie: {
                maxAge: 300,
                httpOnly: false
            }
        });
    } else {
        $fetch('/api/session', {
            headers: {
                'cr-session': '1'
            }
        })
    }
})