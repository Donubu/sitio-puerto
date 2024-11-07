import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllMembers, getMembersByDepartment } from '@/lib/members';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');

    if (department) {
      const members = getMembersByDepartment(department);
      return NextResponse.json(members);
    }

    const allMembers = getAllMembers();
    return NextResponse.json(allMembers);
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}