import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import './HomePage.css'

export default function HomePage({categories}) {
  return (
    <>
          <style>{`body { background-image: url('https://lh3.googleusercontent.com/DzyIW1dhSY6wxa7gJjCY9REd9HHu6jSvKk3VqULHNgn-N0lF3AmVviZxazc0vyJ7GpRXmEA6W_oOMRW5eI0onEVpOxnGFh3Ipqxz0zAbo1NgUY05wYs8hbeHnqe86l1zMD65zEr1q2vGcZgksarplxxvJ8QE6lg9cKZIgDxNnTOouMXKI4qDmn9IDN5jQ9hxiwXnso2W6rF5Xm3mB4xcNszmV5cTHZ_WNRwVU4FAqo8I07chiuOdabgXH3_qemz5YoTME-sRPZVHxldMvsBxP6ap5_vBaGVLA34gP9a24Ti-OwC90BeLAAdynj5sNzDKSvb0D7LLo2bb0HGSimFLCL6kUBA4AtkyOkqXsgUXlCeoordWyP_mIpJqte5zpu62a1x92YJWvka8zxzDIcrNjdjKOfuHLK3nwdTBwUNpohRkqA-arhmng4aWZT2Dv9ko9K8OuZY6cVFq-lyCw74GLYunLtW33qQqHNFY_2US6HZit7jy6pmvEwPRt9myFLNy9ugQSRH7dwperSaQHHZgwgJTyBdE6uplwV2x99cRbtSESXM84R_qVPC7vQ1Pm4lvz7tU8oniJ62meSgBzpfKJDQFCtuCQAVF4XCHZRFExgcCSb_IiW5XxTtL2_pv4kcb_yM6epJ8Ki36RwrYP6ge-z4Z619YSnHLh0mzqSUzU3RzoM0j1HzY5RbN9Ao5Ob4My9T9Hbi23tO4FpVHxhuCdxinN5WrY6eanD_CDFfOZoECQd1PHnfRwI7FfrcjeM7Ga83KjLeLN51CEGtU2kPmY45NnI_aBZtsgMVWXx0pHglb9maDLw0_07VvVQwPT39PZZnEfvZDSVcejpiViSVCSdhaLURuXRs1AloCg0pAxlrrY8lI08Q81QnPfLZRCyRfLUWrHBZLwCl16TXla8yK5ZEdlDu_T_ICcUY9__Hvc2miCSiL6AF_yiDktxHCOQMlFT8mquAh6-p-0q4TQoo5wmlG14xw2fjPR2bTel6Dn0NsCvgk_OZTJGIodaPsiyBJguEA1jQfZGuU-xpCV7LKAfI=w560-h760-s-no?authuser=0'); }`}</style>
    <div class="grid grid-cols-3 grid-rows-2 mt-12 gap-y-20 bg-repeat bg-contain">
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>
    </>
  )
}
