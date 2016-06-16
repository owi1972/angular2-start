/* tslint:disable */
export class Location {
  constructor(
    public address_components: Array<Object>,
    public formatted_address: String,
    public geometry: Object,
    public place_id: String,
    public types: Array<String>
  ) { }
}
