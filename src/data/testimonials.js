/**
 * Ritora Testimonials Dataset
 *
 * NOTE: Real client testimonials are pending formal client approval.
 * All testimonials require client sign-off before publication.
 *
 * Data Model Fields:
 * - id: number | string
 * - name: string (Client name)
 * - photo: string | null (Optional client photograph URL)
 * - clientType: string (Client type / transaction context, e.g. "Managing Principal, Family Office")
 * - location: string (Country or city, optional)
 * - text: string (Testimonial body)
 * - date: string (Date of testimonial)
 * - published: boolean (Controls live rendering on the website)
 */
export const testimonialsData = [
  // Future approved client testimonials will be added here with published: true
  // Example schema:
  // {
  //   id: 1,
  //   name: "Approved Client Name",
  //   photo: null,
  //   clientType: "Managing Principal, Family Office",
  //   location: "Geneva / Dubai",
  //   text: "Genuine approved client quotation...",
  //   date: "2025",
  //   published: false,
  // },
];

