import * as React from 'react';

interface IPersonneComposantProps {}

const PersonneComposant: React.FunctionComponent<IPersonneComposantProps> = () => {
  return (
    <div
      className="relative w-64 h-72 bg-slate- rounded-lg flex flex-col items-center justify-end p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out"
    >
 
      <div className="absolute inset-0 w-full h-1/3 bg-blue- rounded-t-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"></div>
      </div>
      <div className="relative z-10 -mt-16 transition-transform transform hover:scale-110 duration-300 ease-in-out">
        <div className="w-28 h-28 bg-white rounded-full overflow-hidden  border-4 border-white">
          <img
            src="https://via.placeholder.com/150"
            alt="Profil du professeur"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-gray-50 w-full rounded-lg p-4 flex flex-col items-start space-y-2 -mt-4 shadow-md transition-opacity duration-300 ease-in-out hover:opacity-95">
        <div className="text-lg font-semibold">Kageu Ulrich</div>
        <div className="text-sm text-gray-600">2370692134088</div>
        <div className="text-sm text-gray-600">ulrichkageu@gmail.com</div>
      </div>
    </div>
  );
};

export default PersonneComposant;
