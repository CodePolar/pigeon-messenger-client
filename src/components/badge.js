import { Box, IconButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FaBell } from 'react-icons/fa';

function BadgeButton ({ count, onClick }) {
    return (
        <IconButton
            onClick={onClick}
            css={css`
              position: relative !important;
            `}
            py={'2'}
            colorScheme={'gray'}
            aria-label={'Notifications'}
            size={'lg'}
            icon={<>
                <FaBell color={'black'} />
                <Box as={'span'} color={'white'} position={'absolute'} top={'-6px'} right={'-6px'} fontSize={'0.8rem'}
                     bgColor={'blue.300'} borderRadius={'lg'} zIndex={9999} p={1}>
                    {count}
                </Box>
            </>}
        />
    );
}

export default BadgeButton;