import React, { memo, useState, useEffect } from 'react';
import getCountry from '../../resources/api';
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleString();

    useEffect(() => {
        getCountry(country).then(data => setData(data));
    }, [country])

    function handleChange({ target }) {
        const country = target.value;
        setCountry(country);
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                />    
            </div>
            <Board data={data}/>
        </ContainerStyled>
    )
}

export default memo(Main);