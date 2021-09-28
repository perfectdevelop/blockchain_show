import React, { Component } from 'react';

class HeaderItemsPlus extends Component{
    render () {
        return(
            <>
                <div className="parent-item">
                    <p className="item-number">#1</p>
                    <p className="pairs">SPHYNX</p>
                    <p className="item-number">#2</p>
                    <i className="mdi mdi-step-forward mdi-rotate-270 mdi-24px plus"></i>
                    <p className="pairs">UFO</p>
                    <p className="item-number">#3</p>
                    <i className="mdi mdi-step-backward mdi-rotate-270 mdi-24px plus"></i>
                    <p className="pairs">SHIVA</p>
                    <p className="item-number">#4</p>
                    <i className="mdi mdi-step-backward mdi-rotate-270 mdi-24px minus"></i>
                    <p className="pairs">STARL</p>
                    <p className="item-number">#5</p>
                    <p className="pairs">FLOKI</p>
                    <p className="item-number">#6</p>
                    <i className="mdi mdi-step-backward mdi-rotate-270 mdi-24px minus"></i>
                    <p className="pairs">DEXT</p>
                    <p className="item-number">#7</p>
                    <i className="mdi mdi-step-backward mdi-rotate-270 mdi-24px minus"></i>
                    <p className="pairs">BSW</p>
                </div>
            </>
        )
    }
}

export default HeaderItemsPlus;