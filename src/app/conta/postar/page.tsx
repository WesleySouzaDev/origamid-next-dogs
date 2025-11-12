import ContaPhotoPost from '@/components/conta/conta-photo-post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postar | Conta',
  description: 'Postar foto',
};

export default async function PostarPage() {
  return <ContaPhotoPost />;
}
