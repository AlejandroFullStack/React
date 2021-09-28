import  React, { useState, useEffect, Fragment  } from "react";

let geoID;

function useCoordenadas(){
    const [coordenadas, setCoordenadas] = useState({
            latitud: null,
            longitud: null
        });

    useEffect(() => {
        geoID = window.navigator.geolocation.watchPosition(posiiton => {
            setCoordenadas({
                latitud: posiiton.coords.latitude,
                longitud: posiiton.coords.longitude

            });
        });

        return() => {
            navigator.geolocation.clearWatch(geoID);
        };


    });

    return coordenadas;

}

export default function Coor() {
    const coordenadas = useCoordenadas();

    return coordenadas.latitud==null ? (
        <Fragment>Cargando ... </Fragment>
    ) :  (
        <Fragment>
            <h2>Latitud: {coordenadas.latitud}</h2>
            <h2>Longitud: {coordenadas.longitud}</h2>
        </Fragment>
    );

}