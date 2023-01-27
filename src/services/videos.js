export const fetchVideo = async (video_url) => {
    const url = new URL('https://downloader-api.galasso.workers.dev/');
    const video = new URL(video_url);

    const hosts = ['facebook', 'instagram'];
    const idx = hosts.findIndex((host) => host === video.host.split('.')[1]);
    if (idx === -1) {
        return null;
    }
    url.pathname += hosts[idx];
    url.searchParams.set('video_url', video_url);

    const res = await fetch(url);
    if (res.ok) {
        const json = await res.json();

        if (idx === 0) {
            return { url: json.hd || json.sd };
        } else {
            return { url: json.url }
        }
    } else return { error: 'El video no se pudo generar' };
}