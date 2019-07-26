import { promises as fs } from 'fs'
import path from 'path'
const textile = path.join(__dirname, '..', '..', 'bin', 'textile')
import execa from 'execa'

describe('npm-go-textile', () => {
  it('ensure textile bin path exists', async () => {
    await fs.stat(textile)
    const res = execa.sync(textile, ['version'], {
      cwd: path.join(__dirname),
    })
    expect(res.stdout).toMatch('go-textile version')
  })
})
