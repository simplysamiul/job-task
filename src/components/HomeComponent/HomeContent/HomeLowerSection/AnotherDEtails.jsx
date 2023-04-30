import React from 'react'

const AnotherDEtails = () => {
  return (
    <div className='bg-white py-4 rounded-lg my-4'>
      <div className='w-1/3 p-4 mb-2'>
        <p className='bg-secondary flex items-center text-center rounded-full w-full pr-4'>
          <span className=' bg-primary text-white text-sm p-4 rounded-full w-1/2'>Model</span>
          <span className='text-textPrimary text-sm rounded-full w-1/2'>Style</span>
        </p>
          </div>
          <div className='w-full px-4'>
                <table class="table-auto w-full text-primary font-semibold">
                    <thead className='border-t-2 border-b-2 border-primary'>
                        <tr className='text-center text-sm'>
                                <th>Team</th>
                                <th>League</th>
                                <th>Season</th>
                                <th className='border-r-2 border-primary py-8'>Minutes</th>
                                <th>Ball <br/> Progression</th>
                                <th>Shot <br/> Creation</th>
                                <th>Set-Plays</th>
                                <th className='border-r-2 border-primary'>Ball <br/> Retention</th>
                                <th>Defending <br/> Impact</th>
                                <th className='border-r-2 border-primary'>Defending <br /> Frequency</th>
                                <th>Off</th>
                                <th>Def</th>
                                <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className='text-center border-b-2 border-primary'>
                        <tr className='text-center'>
                                <td>Atletico Huila</td>
                                <td>COL1</td>
                                <td>2021</td>
                                <td className='border-r-2 border-primary py-8'>346</td>
                                <td>3</td>
                                <td>4</td>
                                <td>3</td>
                                <td className='border-r-2 border-primary'>81</td>
                                <td>Atletico Huila</td>
                                <td className='border-r-2 border-primary'>15</td>
                                <td>-0.13</td>
                                <td>-0.03</td>
                                <kbd className="kbd mt-6 bg-rose-100 text-red font-bold borde-0 rounded-full">-0.16</kbd>
                        </tr>
                    </tbody>
                </table>
          </div>
    </div>
  )
}

export default AnotherDEtails
