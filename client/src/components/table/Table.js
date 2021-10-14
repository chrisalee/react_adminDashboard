import React, { useState } from 'react';
import './Table.css';
// import Customers from '../../assets/JsonData/customer-list.json';

const Table = (props) => {

    const initailDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;
    const [dataShow, setDataShow] = useState(initailDataShow);

    let pages = 1;
    let range = [];
    if(props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length & Number(props.limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()]
    }

    return (
        <div className='table-wrapper'>
            <table>
                {
                    props.headData && props.renderHead ? (
                        <thead>
                            <tr>
                                {
                                    props.headData.map((item, index) => props.renderHead(item, index))
                                }
                            </tr>
                        </thead>
                    ) : null
                }
                {
                    props.bodyData && props.renderBody ? (
                        <tbody>
                            {
                                dataShow.map((item, index) => props.renderBody(item, index))
                            }
                        </tbody>
                    ) : null
                }
            </table>
            
        </div>
    )
}

export default Table;
