export class ListTestimonialDto {
  constructor(
    readonly id: string,
    readonly userId: string | undefined,
    readonly name: string,
    readonly photo: string,
    readonly testimonial: string,
  ) {}
}
