export interface PlaiceholderRequest {
  imageURL: string;
}

export interface PlaiceholderResponse {
  plaiceholder: {
    base64: string;
    css: {
      [css in 'backgroundImage' | 'backgroundPosition' | 'backgroundSize' | 'backgroundRepeat']: string;
    }
  }
}
