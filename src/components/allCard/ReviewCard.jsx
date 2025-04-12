import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '../ui/card';

const ReviewCard = ({item}) => {

    const { name, rating, review, date, profileImage } = item || {};

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 h-full transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center mb-4">
        <img
          src={profileImage}
          alt={name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <div className="flex items-center text-yellow-500 mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
        {halfStar && <Star size={18} fill="currentColor" className="opacity-50" />}
        <span className="ml-2 text-sm text-gray-700">{rating.toFixed(1)}</span>
      </div>

      <p className="text-gray-700 text-sm">{review}</p>
    </div>
  );
};

export default ReviewCard;
