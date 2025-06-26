import { Icon, useTheme } from '@mui/material';
import { type FC } from 'react';

export const ClearIcon: FC = () => {
  const theme = useTheme();
  return <Icon className="ico-misc-circle-cancel" sx={{ color: theme.palette.grey[400] }} />;
};
