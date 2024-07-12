export class ListTestimonialDto {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly photo: string,
    readonly testimonial: string,
  ) {}
}
