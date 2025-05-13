
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

const ResourceCard = ({
  title,
  description,
  actionText = "Learn More",
  link,
  colorClass = "bg-comfort-blue",
  className,
  style,
}) => {
  // Convert colorClass from tailwind format to CSS class
  let colorStyle = {};
  
  if (colorClass.includes('comfort-blue')) {
    colorStyle.backgroundColor = 'var(--comfort-blue)';
  } else if (colorClass.includes('comfort-green')) {
    colorStyle.backgroundColor = 'var(--comfort-green)';
  } else if (colorClass.includes('comfort-purple')) {
    colorStyle.backgroundColor = 'var(--comfort-purple)';
  } else if (colorClass.includes('comfort-yellow')) {
    colorStyle.backgroundColor = 'var(--comfort-yellow)';
  } else if (colorClass.includes('comfort-peach')) {
    colorStyle.backgroundColor = 'var(--comfort-peach)';
  } else if (colorClass.includes('comfort-neutral')) {
    colorStyle.backgroundColor = 'var(--comfort-neutral)';
  }
  
  // Apply opacity
  if (colorClass.includes('/30')) {
    colorStyle.opacity = 0.3;
  } else if (colorClass.includes('/20')) {
    colorStyle.opacity = 0.2;
  } else if (colorClass.includes('/10')) {
    colorStyle.opacity = 0.1;
  } else if (colorClass.includes('/50')) {
    colorStyle.opacity = 0.5;
  }

  return (
    <Card className={`resource-card ${className || ''}`} style={style}>
      <div className="card-color-indicator" style={colorStyle}></div>
      
      <div className="card-header">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </div>
      
      <CardContent className="card-content">
        <Typography variant="body2" color="textSecondary">
          {description.length > 120 ? description.slice(0, 120) + '...' : description}
        </Typography>
      </CardContent>
      
      <div className="card-footer">
        <Button 
          component="a" 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          endIcon={<ArrowRightAlt />}
          style={{ 
            textTransform: 'none', 
            padding: 0, 
            backgroundColor: 'transparent'
          }}
        >
          {actionText}
        </Button>
      </div>
    </Card>
  );
};

export default ResourceCard;
