import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardener = () => {
    const gardeners = useLoaderData();
    return (
        <div className="py-12 bg-[#2E7D3220]">
            <h2 className="text-center font-bold text-3xl mb-8 text-[#2E7D32]">Gardeners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {gardeners.map(gardener => (
          <div key={gardener._id} className="p-5 rounded-2xl shadow bg-[#6FCF9750]">
            <img src={gardener.photoUrl} alt={gardener.name} className="rounded-xl mb-4 w-full" />
            <h3 className="text-xl font-semibold mb-2">Name: {gardener.name}</h3>
            <h3 className="text-xl font-semibold mb-2">City: {gardener.city}</h3>
          </div>
        ))}
      </div>

        </div>
    );
};

export default ExploreGardener;