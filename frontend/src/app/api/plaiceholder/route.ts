import { NextResponse, type NextRequest } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

import { PlaiceholderRequest, PlaiceholderResponse } from '#props/api';

export async function POST(request: NextRequest) {
  const { imageURL }: PlaiceholderRequest = await request.json();

  if (!imageURL) {
    return new NextResponse(
      JSON.stringify({ message: 'The `imageURL` is undefined' }),
      { status: 400 }
    );
  }

  try {
    const buffer = await fetch(imageURL)
      .then(async (response) => Buffer.from(await response.arrayBuffer()));
    const { base64, css } = await getPlaiceholder(buffer);

    return NextResponse.json<PlaiceholderResponse>({
      plaiceholder: {
        base64,
        css
      }
    }, { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: 'The `imageURL` is incorrect' }),
      { status: 400 }
    );
  }
}
