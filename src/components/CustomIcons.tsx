import { Icon, useTheme } from '@mui/material';
import { type FC } from 'react';

interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon: FC<ArrowIconProps> = (props) => {
  return <Icon className={`${props.className} ico-arrows-simple-arrow-down`} color="inherit" />;
};

export const ClearIcon: FC = () => {
  const theme = useTheme();
  return <Icon className="ico-misc-circle-cancel" sx={{ color: theme.palette.grey[400] }} />;
};
