import React from 'react';

function Job({job}) {
    return(
    <table>
        <tr>
            <td width="1%">
                <input type="checkbox" ></input>
            </td>
            <td width="59%">
                {job.tyotehtava}
            </td>
            <td width="20%">
                {job.osoite}
            </td>
            <td width="20%">
                <a href={job.linkki}>LISÄTIETOJA</a>
            </td>
        </tr>
    </table> )
}
export default Job;