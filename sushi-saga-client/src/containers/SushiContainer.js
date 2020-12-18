import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
    return (
        <Fragment>
            <div className="belt">
                {props.sushis.map((sushi) => (
                    <Sushi
                        key={sushi.id}
                        sushi={sushi}
                        handleEatenSushi={props.handleEatenSushi}
                        check={props.eatenSushi.includes(sushi)}
                    />
                ))}
                <MoreButton handleNextSushi={props.handleNextSushi} />
            </div>
        </Fragment>
    );
};

export default SushiContainer;
