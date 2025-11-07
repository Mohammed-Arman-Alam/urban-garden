import React, { useEffect, useState } from 'react';

const TopTrendingTips = () => {
    const [tips, setTips] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/topTips")
        .then(res=>res.json())
        .then(data =>setTips(data))
    },[])
    console.log(tips);
    return (
        <div className="py-12 bg-[#2E7D3220]">
            <h2 className="text-center font-bold text-3xl mb-8 text-[#2E7D32]">Top Trending Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {tips.map(tip => (
          <div key={tip._id} className="p-5 hover:p-2 rounded-2xl shadow bg-[#6FCF9750]">
            <img src={tip.image} alt={tip.title} className="rounded-xl mb-4 w-full" />
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description.slice(0, 80)}...</p>
          </div>
        ))}
      </div>

        </div>
    );
};

export default TopTrendingTips;