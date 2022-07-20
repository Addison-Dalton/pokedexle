import { FC, ReactNode, memo } from 'react';
import { Flex, Box, FormLabel, FormHelperText } from '@chakra-ui/react';

type Props = {
  label: string;
  htmlFor?: string;
  helperText?: string;
  flexDirection?: 'row' | 'column';
  children: ReactNode;
};

const SettingContainer: FC<Props> = ({
  label,
  htmlFor,
  helperText,
  flexDirection = 'row',
  children
}) => (
  <Flex width="100%" flexDirection={flexDirection}>
    <Box flex="1 1 0%">
      <FormLabel htmlFor={htmlFor} marginBottom={0}>
        {label}
      </FormLabel>
      {helperText && (
        <FormHelperText marginTop={0} fontSize="xs">
          {helperText}
        </FormHelperText>
      )}
    </Box>
    <Box justifyContent="flex-end">
      {children}
    </Box>
  </Flex>
);

const memoizedComponent = memo(SettingContainer);

export { memoizedComponent as SettingContainers };