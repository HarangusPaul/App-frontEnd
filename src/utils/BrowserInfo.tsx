interface BrowserInfo {
    location: string;
    type: string;
}

const getBrowserInfo = (): Promise<BrowserInfo> => {
    return new Promise((resolve, reject) => {
        let location = '';
        let type = '';

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                    resolve({ location, type });
                },
                (error) => {
                    console.error('Error getting location:', error);
                    reject(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject('Geolocation is not supported by this browser.');
        }

        const userAgent = navigator.userAgent;
        if (userAgent.indexOf('Firefox') !== -1) {
            type = 'Firefox';
        } else if (userAgent.indexOf('Chrome') !== -1) {
            type = 'Chrome';
        } else if (userAgent.indexOf('Safari') !== -1) {
            type = 'Safari';
        } else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1) {
            type = 'Internet Explorer';
        } else {
            type = 'Unknown';
        }
    });
};

export default getBrowserInfo;