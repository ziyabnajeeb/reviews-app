import tw, { styled } from 'twin.macro';

export const Main = tw.main`container mx-auto mt-4 flex h-screen items-center justify-center p-8`;
export const Section = tw.section`grid grid-cols-8 gap-3 w-full place-items-center text-center`;
export const Heading = tw.h1`text-center text-4xl text-purple-900 font-bold w-full`;
export const Card = styled.div(({ variant }) => [
  tw`col-span-full flex min-h-min w-full md:w-[36rem] flex-col items-center justify-center rounded-lg bg-white/70 p-12 shadow-xl ring-1 ring-purple-100 border-2`,
  variant === 'big' && tw`w-full md:w-[40rem]`,
]);
export const CardHeader = tw.div`relative flex rounded-full shadow-lg`;
export const CardImage = tw.img`relative z-10 inline-block h-36 w-36 rounded-full ring-2 ring-purple-200 object-cover`;
export const CardImageShadow = tw.div`absolute -right-[14px] -top-[14px]  inline-block h-40 w-40 rounded-full bg-purple-900/30 ring-2 ring-purple-900/30`;
export const CardBody = tw.div``;
export const CardName = tw.div`flex flex-col items-center justify-center py-5`;
export const CardNameText = tw.p`text-xl font-bold text-purple-800 capitalize`;
export const CardNameDesignation = tw.span`text-xs uppercase italic text-slate-700`;
export const CardContent = tw.div`py-5 text-slate-700`;
export const CardContentText = tw.p``;
export const CardCarousel = tw.div`flex items-center justify-center py-5`;
export const CardCarouselLeftArrow = tw.div`transform duration-75 hover:text-purple-900`;
export const CardCarouselRightArrow = tw.div`transform duration-75 hover:text-purple-900`;
export const CardFooter = tw.div``;
export const CardAction = tw.div` pt-5`;
export const CardButton = tw.button`rounded-lg bg-gradient-to-b font-bold from-purple-400 to-purple-500 px-8 py-5 text-white ring-2 ring-purple-200 hover:bg-purple-900 hover:ring-2 hover:ring-purple-400`;
