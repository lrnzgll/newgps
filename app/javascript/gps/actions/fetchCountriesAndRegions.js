export default function fetchCountriesAndRegions() {
    const promise = fetch('/api/v1/home', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
    return {
        type: 'FETCH COUNTRIES AND REGIONS',
        payload: promise
    };
}