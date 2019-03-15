import { fetchCountriesAndRegions } from "fetchCountriesAndRegions"

export function loadRoutes() {
    const promise = fetch('/api/v1/routes')
        .then((response) => response.json())
    return {
        type: 'LOAD ROUTES',
        payload: promise
    }
}
// export function getGPX(route) {
//     const promise = fetch(`/api/v1/downloadgpx/${route}`)
//         .then((response) => response.json())
//     return {
//         type: 'GET GPX',
//         payload: promise
//     }
// }
export function loadLastRoutes() {
    const promise = fetch('/api/v1/routes/last_routes')
        .then((response) => response.json())
    return {
        type: 'LOAD LAST ROUTES',
        payload: promise
    }
}
export function isSignedIn() {
    const promise = fetch('/api/v1/is_signed_in')
        .then((response) => response.json())
    return {
        type: 'IS SIGNED IN',
        payload: promise
    }
}

export function loadRegionRoutes(region, value) {
    const promise = fetch(`/api/v1/regions/${region}/${value}`)
        .then((response) => response.json())
    return {
        type: 'LOAD REGION ROUTES',
        payload: promise
    }
}



export function loadRoute(route) {
    const promise = fetch(`/api/v1/routes/${route}`)
        .then((response) => response.json())
    return {
        type: 'LOAD ROUTE',
        payload: promise
    }
}

export function findRoutes(values, callback) {
    const promise = fetch(`/api/v1/routes/search/${values.searchroute}`)
        .then((response) => response.json())
        .then(callback)
    return {
        type: 'FIND ROUTES',
        payload: promise
    }
}

export function clickedlikebtn(body, callback) {
    const request = fetch(`/api/v1/routes/like_route`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
        .then(callback)
    return {
        type: 'LIKE BUTTON',
        payload: request
    };
}


