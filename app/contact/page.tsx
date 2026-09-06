// Contact / Join Us Page route
import ScrollReveal from '@/components/ScrollReveal';
import JoinUsCard from '@/components/JoinUsCard';

export const metadata = {
  title: 'ACM Delhi Technical Campus | Join Us',
  description: 'Connect with ACM Delhi Technical Campus chapter through official membership and social channels.',
};

export default function ContactPage() {
  return (
    <div className="contact-page py-4">
      <ScrollReveal className="section">
        <JoinUsCard />
      </ScrollReveal>
    </div>
  );
}