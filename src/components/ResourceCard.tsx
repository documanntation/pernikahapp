import React from 'react';
import { Resource, ResourceType } from '../types';
import { ExternalLink, BookOpen, Video, Globe, GraduationCap, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResourceCardProps {
  key?: string;
  resource: Resource;
  categoryName: string;
}

export default function ResourceCard({ resource, categoryName }: ResourceCardProps) {
  const { t } = useLanguage();

  // Helper to render type badge
  const renderTypeBadge = (type: ResourceType) => {
    const baseClass = "absolute top-3 left-3 flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-xs text-white";
    switch (type) {
      case 'youtube':
        return (
          <span className={`${baseClass} bg-[#ea3323]/85`}>
            <Video className="w-3 h-3" />
            <span>YouTube</span>
          </span>
        );
      case 'instagram':
        return (
          <span className={`${baseClass} bg-radial from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]/90`}>
            <Instagram className="w-3 h-3" />
            <span>Instagram</span>
          </span>
        );
      case 'book':
        return (
          <span className={`${baseClass} bg-[#d97706]/85`}>
            <BookOpen className="w-3 h-3" />
            <span>Book</span>
          </span>
        );
      case 'course':
        return (
          <span className={`${baseClass} bg-[#059669]/85`}>
            <GraduationCap className="w-3 h-3" />
            <span>Course</span>
          </span>
        );
      case 'website':
        return (
          <span className={`${baseClass} bg-[#4582b4]/85`}>
            <Globe className="w-3 h-3" />
            <span>Website</span>
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-[#4b5563]/85`}>
            <ExternalLink className="w-3 h-3" />
            <span>Recommendations</span>
          </span>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group bg-white border border-brand-beige-dark/45 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Thumbnail Area with badge overlay */}
        <div className="relative h-44 w-full bg-[#f1f0ec] overflow-hidden">
          {resource.thumbnailUrl ? (
            <img 
              src={resource.thumbnailUrl} 
              alt={resource.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-brand-beige-dark">
              <BookOpen className="w-12 h-12 stroke-1" />
            </div>
          )}
          {/* Visual gradient cover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          {renderTypeBadge(resource.resourceType)}

          {/* Source Creator Label */}
          {resource.creator && (
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-0.5 rounded-md text-[10px] font-semibold">
              {resource.creator}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-5">
          <div className="flex items-center space-x-1.5 text-[10px] uppercase font-extrabold text-brand-blue tracking-widest mb-1.5">
            <span>{categoryName}</span>
          </div>
          <h3 className="serif-heading text-base font-bold text-brand-slate line-clamp-2 leading-snug tracking-tight mb-2 group-hover:text-brand-red transition-colors">
            {resource.title}
          </h3>
          <p className="text-xs text-[#52525b] leading-relaxed line-clamp-3 mb-4">
            {resource.description}
          </p>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-end border-t border-brand-beige-dark/30">
        {/* Call to action redirect link */}
        <a 
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 px-4 py-1.5 rounded-lg text-xs font-semibold bg-brand-red/10 text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span>Visit</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
