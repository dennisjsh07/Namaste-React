import { useEffect, useState } from "react";
import { Menu_Api } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchdata();
    }, [])
    // console.log(Menu_Api, resId);
    const fetchdata = async ()=>{
        const data = await fetch(Menu_Api + resId);
        const json = await data.json();
        // console.log("json :", json)
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;