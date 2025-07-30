import React from 'react'
import './style.css'



export default function TableDefault({ culName, linName, item1, item2 }) {
    return (
        <div className='container-table'>
            <table>
                <thead>
                    <tr>
                    <th>{culName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><a href="https://www.amazon.com.br/Madame-Bovary-Gustave-Flaubert/dp/6555520477/ref=sr_1_1?adgrpid=132212979830&dib=eyJ2IjoiMSJ9.K_gp_LpzK9AiMauNtL8GO3VE86d5ny6QEI5AhL-UV-O7np52oiEvMC58M2F90Tl0eB71_Pjl9X4xchRqdGKYpPVppImnk56taHFhMY67q8QaprX6ke3MN__KutvSvuh9ia8EBsL_5ske0FfvGJrIuBWJbvlleV1yFYqnLhOC_LyWFM_zdOHePbn6dWG7-oKQ4fLmCRl-Kjyhunxr8h55WTr3cXGTvwypKIqCjuvitMY9PV-3SgvbwJShkikQnmGxhCYbmzOW5GjAbHOqdHlL0v1oCcHU8FchgUBP8OT6ZGY.OR7mzgMGtMx0whJXQQRdc8R9J7V89UMpp-GkwojXUx8&dib_tag=se&hvadid=595885698674&hvdev=c&hvlocphy=9100370&hvnetw=g&hvqmt=e&hvrand=11318669369937427014&hvtargid=kwd-843343964573&hydadcr=16132_13545519&keywords=amazon+madame+bovary&mcid=0a82b01278bf386698acd7e0159538b7&qid=1753384094&sr=8-1" target="_blank">{item1}</a></td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}