import React from "react"
import Hero from "../Component/Hero/Hero"
import NewCollections from "../Component/NewCollections/NewCollections"
import Offers from "../Component/Offers/Offers"
import Popular from "../Component/Popular/Popular"

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </div>
    )

    

}



export default Shop