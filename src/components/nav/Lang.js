import React from "react";
//i18n.js
// import {userTranslation} from 'react-i18next';

class Language extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    // on click the language icon, show the dropdown menu
    onClick() {
        this.setState({
            show: !this.state.show
        })
    }

    onChange = (lng) => {
        this.props.i18n.changeLanguage(lng);
        this.setState({
            show: false
        })
    }

    render() {
        const imgStyle = {
            width: '30px',
            height: '30px',
        }
        return (
            <div>
                <img alt='' style={imgStyle} src={require('../../assets/lang.png')} onClick={(e) => {this.onClick()}} />
                {/* top dropdown menu select the language, include en\id\zh*/}

                <div style={{zIndex:999999, display: this.state.show ? 'flex': 'none', flexDirection: 'column', position: 'absolute', top: '50px', right: '0px', width: '200px',  backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px' }}>
                    <div onClick={(e) => {this.onChange('en')}}  
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '40px', fontSize: '16px', fontWeight: 'bold', color: '#0B57FF' }}>
                        English
                    </div>
                    <div onClick={ (e) => {
                        this.onChange('id')
                    }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '40px', fontSize: '16px', fontWeight: 'bold', color: '#0B57FF' }}>
                        Bahasa
                    </div>
                    <div onClick={(e) => {
                        this.onChange('cn')
                    }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '40px', fontSize: '16px', fontWeight: 'bold', color: '#0B57FF' }}>
                        中文简体
                    </div>

                </div>
            </div>

        );
    }
}
export default Language;