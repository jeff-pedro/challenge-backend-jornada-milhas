export class ListDestinationDto {
  constructor(
    readonly photo_1: string,
    readonly photo_2: string,
    readonly name: string,
    readonly target: string,
    readonly descriptive_text: string | undefined,
  ) {}
}
