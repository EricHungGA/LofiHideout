import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import './HomePage.css'

export default function HomePage({categories}) {
  return (
    <>
    <style>{`body { background-image: url('https://lh3.googleusercontent.com/umvEZNvDSTaQJTigrtH0SSiyU_vI3uJmRLMLQkMHnHzh7Fb8NqiqRD8ykyXjL6821-Hzdao_6-1_6c5XHEqAtfUlu1IBKrTr83buTTb2jUWItMpRoxDMGWc3UKcrjYb3aS5E_I4cRswiTjEos0lLQrQCFkEh5iQkUfRJnRjtVaadgalkrhMhAcHLqyilclhntxVbrYrO1aeTg-4yFAHNd3wnI7DsatGywlhNjltdCFFjPi1JLhu1pAEWFuDOtj-eT2flTZUMgml71SSrzy3yDUpuH4ZwRSg6F4zXWVLXAAgDBguDY-BKteSuS8JSMbeP5M_kWda0Boj7kzSvyGD1c6vSFVpfeZGE2zxsIhVf7Jl803HezFczsHsB1xZdmC0I9-7rqAaxMTmIbxMv5F-4HvBJRcqQonTFgq4k5md0M2hXEPcQVwewCs5ksSGGb0BkSP2HAGd-xizoMeTLK-6-BY8AsnoJ7ZWIzYSyMhGMKq4mJu6aUj4QfB8Y6VcBG5-Wk--d-bjcrY0xFjO0wwL3w36prs06HItI8pp8iXG10GM-UVf19bGmzY_5O-cpeCEYy346mcmAFg5WllOy0GZBupuytQy1oSO7mapAJiTUdyHTvxVXK1xqXnCCK7B-ZFHVbLEgTt1KNOZYko87RadGyKUltfVzTNrEcDM7t1m3uxFdmOfHWGypr7MbjvSoSzWOT826_d78-777E1x5pp1vIWXVg5g4PIWcZqAcab2ASmUPFS8C8WfX1VdkXT-cqul25P0COQ8VaMuwarMU2lGat_3ZO1qkN-5xRvc7wa8_8pTEs8DMX-I4bSqiUGzA5T5tSYa8tAqFXpN0RpfCMx9j38WFec0VrmXKa4ysZ4VsX9Y0yc4ixji4sIA9biAVNzoTx--y83E6l6zOUUxus3DWDUaqm8qoOzrLEj98B4clmdO83ULPzkmKi0MMAChk795rNkQWey8cTD1H541MX7DNwNkWLlu217KJW8hZUNLf3RUsyofPXAUb-zrez5X1aJ8cWLt-mpcuYYDKTtmtGbPikHY=w560-h760-s-no?authuser=0'); }`}</style>
    <div class="grid grid-cols-3 grid-rows-2 mt-12 gap-y-20 bg-repeat bg-contain">
    {categories.map((c, idx) => <CategoryCard key={idx} category={c}/>)}
    </div>
    </>
  )
}
