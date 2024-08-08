export class ListDestinationDto {
  constructor(
    readonly photo1: string,
    readonly photo2: string,
    readonly name: string,
    readonly target: string,
    readonly descriptiveText: string,
  ) {}
}
