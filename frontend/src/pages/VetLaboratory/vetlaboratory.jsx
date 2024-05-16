import * as React from 'react';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';


const LabResults = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/api/lab-tests')
            setResults(response.data)
            console.log(response.data)
        };
        fetchData();
    }, []);



    const endpointParam = location.pathname;


    return (
        <div>
            <h2>Lab Results</h2>

                <div>
                    <table className='table table-responsive'>
                        <thead>
                        <tr>
                            <th>Veterinarian</th>
                            <th scope='col'>Customer</th>
                            <th>Anmimal</th>
                            <th scope='col'>Test Date</th>
                            <th scope='col'>Test Type</th>
                            <th scope='col'>Test Description</th>
                            <th scope='col'>Test Status</th>
                        </tr>
                        {results.map((result) => (
                            <tr key={result?.id}>
                                <td>{result?.veterinarian?.firstname} - {result?.veterinarian?.surname}</td>
                                <td>{result?.customer?.firstname} - {result?.customer?.surname}</td>
                                <td>{result?.animal?.name}</td>
                                <td>{result.testDate}</td>
                                <td>{result?.labTestType?.testTypeName}</td>
                                <td>{result?.testDescription}</td>
                                <td>
                  <span className="badge rounded-pill text-bg-primary">
                    {result.testStatus}
                  </span>
                                </td>
                            </tr>
                        ))}
                        </thead>
                    </table>
                </div>

        </div>
    );
};

export default LabResults;
