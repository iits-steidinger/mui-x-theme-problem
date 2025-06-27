import { Box, Icon, keyframes } from '@mui/material';
import { type FC } from 'react';

const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

interface LoadingSpinnerProps {
    color?: string;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ color }) => {
    return (
        <Box
            component={'span'}
            sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: `${spin} 1s infinite ease`,
                color: color || 'primary',
            }}
        >
            <Icon className={`ico-online-loading`} color={'inherit'} />
        </Box>
    );
};
