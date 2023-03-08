import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Slug({ params: { slug } }: Props) {
  return <div>{slug}</div>;
}
