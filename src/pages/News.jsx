import React, { useState } from "react";
import FetchData from "../data/FetchData";
import { Container } from "@mui/material";

function News () {
    return (
        <div>
            <Container>
                <FetchData />


            </Container>
            
        </div>
    )
}

export default News;