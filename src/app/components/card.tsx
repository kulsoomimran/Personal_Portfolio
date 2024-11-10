import React from 'react';

const ProjectCard = ({ title = '', Description = '', repoLink = '', command = '', deploymentLink = '' }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-customPink hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold text-blue-950 mb-2">{title}</h3>
      <h4 className="text-md mt-2 mb-4 text-gray-700">{Description}</h4>
      <a href={repoLink} target="_blank" className="text-red-700 mr-4">
        View Repository
      </a>
      {command && (
        <p className="mt-2">
          <strong>NPX Command:</strong> <code>{command}</code>
        </p>
      )}
      {deploymentLink && (
        <a href={deploymentLink} target="_blank" className="text-green-800 mt-2 block">
          View Live
        </a>
      )}
    </div>
  );
};

export default ProjectCard;