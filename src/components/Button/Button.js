import tw, { styled, css, theme } from 'twin.macro';

const Button = styled.button(({ variant, isSmall }) => [
  // The common button styles added with the tw import
  tw`px-9 py-4 rounded-lg transform duration-100`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-purple-900)`,

  // Use props to conditionally style your components
  variant === 'primary' &&
    tw`text-white bg-gradient-to-b font-bold from-purple-400 to-purple-500 ring-2 ring-purple-500 hover:bg-purple-900 hover:ring-2 hover:ring-purple-900`,

  // Combine regular css with tailwind classes within backticks
  variant === 'secondary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.red`};
  `,
]);

export default Button;
